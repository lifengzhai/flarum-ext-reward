import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionControls from 'flarum/utils/DiscussionControls';

import RewardModal from 'lifengzhai/reward/components/RewardModal';

export default function addRewardControls() {

    extend(DiscussionPage.prototype, 'sidebarItems', function(items) {
        if (app.session.user) {
            const discussion = this.discussion;

            items.add('reward', Button.component({
                icon: 'cny',
                title: '我要打赏',
                children: '我要打赏',
                className: 'Button Button--danger',
                onclick: function onclick() {
                    console.log(discussion);
                    return app.modal.show(new RewardModal());
                }
            }));
        }
    });

}