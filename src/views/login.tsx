import React from 'react';
import { Text } from 'react-native';
import Button from '../components/buttons'
import R from 'res/R';

interface LoginProps {
    login: () => void
}

export default class Home extends React.Component<LoginProps> {

    render() {
        return (
            <>
                <Text>BYE mAn</Text>
                <Button
                    title={R.i18n.t('login')}
                    onPress={this.props.login}
                />
            </>
        );
    }

}