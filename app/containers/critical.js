//危急值

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView, Platform} from 'react-native';
import config from '../config';

export default class Critical extends Component {
    render() {
        return (
            <WebView
                startInLoadingState={true}
                javaScriptEnabled={true}
                source={{ uri: config.domain + config.criticalUrl }}
                style={styles.container}
                />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 64 : 51,
    },
});

