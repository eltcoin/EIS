import PageTemplate from '../components/PageTemplate'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import styled from 'styled-components';
import AddLinkContainer from '../components/AddLinkContainer';
import ExpandableAddress from '../components/ExpandableAddress'
import { useState } from 'react'
import { bindActionCreators } from 'redux';
import { registerAccount } from '../actions/users'
import { connect } from 'react-redux'

const Title = styled.h2`
    font-size: 24px;
`

const Style = styled.div`
margin: 2em 3em;
`


function Register({ registerAccount }) {
    let [accepted, setAccepted] = useState(false)

    return <PageTemplate>
        <Style>
            <Title>Register</Title>
            <div>
                <p>Welcome to an experiment</p>
                <p>Guac is the first openly curated index</p>
                <p>To become part of our community, you have to have a stake</p>

                <p>It's a $5 deposit to join.</p>
                <p>This price is set by the community.</p>
                <h4>What happens if I decide to leave?</h4>
                <p>Your stake will be refunded, minus the 5% commons fee.</p>

                <div>
                <label>
                    <Checkbox type="checkbox" name="checkbox" value={accepted} onChange={() => setAccepted(!accepted)}/>
                    I get the idea
                </label>
                </div>

                <Button disabled={!accepted} onClick={registerAccount}>Register</Button>
            </div>

        </Style>
    </PageTemplate>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            registerAccount
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Register)