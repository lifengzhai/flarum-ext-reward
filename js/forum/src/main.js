import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Post from 'flarum/models/Post';
import Discussion from 'flarum/models/Discussion';
import Model from 'flarum/Model';
import NotificationGrid from 'flarum/components/NotificationGrid';

import addRewardBadge from 'lifengzhai/reward/addRewardBadge';
import addRewardControls from 'lifengzhai/reward/addRewardControls';

app.initializers.add('lifengzhai-reward', function() {
    // alert('Hello, world!');
    Discussion.prototype.reward = Model.attribute('reward');
    // addRewardBadge();
    addRewardControls();
});