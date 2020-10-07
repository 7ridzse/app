import React from 'react';
import { Text } from 'react-native';
import Button from '../components/buttons'
import R from 'res/R';

interface LogoutProps {
    logout: () => void
}
export default class Home extends React.Component<LogoutProps> {

    render() {
        return (
            <>
                <Text>SUP mAn</Text>
                <Button
                    title={R.i18n.t('logout')}
                    onPress={this.props.logout}
                />
            </>
        );
    }
}