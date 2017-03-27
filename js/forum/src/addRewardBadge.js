import { extend } from 'flarum/extend';
import Discussion from 'flarum/models/Discussion';
import Badge from 'flarum/components/Badge';

export default function addRewardBadge() {
    extend(Discussion.prototype, 'badges', function(badges) {
        let badge;

        badge = Badge.component({
            label: '打赏',
            icon: 'cny',
        });

        if (badge) {
            badges.add('reward', badge);
        }
    });
}