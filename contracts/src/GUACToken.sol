import "./lib/ERC20.sol";
import "./lib/ERC20Detailed.sol";

contract GUACToken is ERC20, ERC20Detailed {
    mapping(address => bool) canMint;
    mapping(address => bool) canBurn;

    bool _setup = false;

    constructor(
    )
        ERC20()
        ERC20Detailed("GUAC", "Guac", 18)
        public
    {
        return;
    }

    function setup(address _MemberNFT) public {
        require(!_setup, "already setup");
        canMint[_MemberNFT] = true;
        canBurn[_MemberNFT] = true;

        // give founder 10M tokens
        _mint(msg.sender, 1000000*(10^18));
        _setup = true;
    }

    function mint(address account, uint256 amount) public returns (bool) {
        require(canMint[msg.sender], "unauthorised");
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount) public returns (bool) {
        require(canBurn[msg.sender], "unauthorised");
        _burn(account, amount);
        return true;
    }
}