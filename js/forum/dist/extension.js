'use strict';

System.register('lifengzhai/reward/addRewardBadge', ['flarum/extend', 'flarum/models/Discussion', 'flarum/components/Badge'], function (_export, _context) {
    "use strict";

    var extend, Discussion, Badge;
    function addRewardBadge() {
        extend(Discussion.prototype, 'badges', function (badges) {
            var badge = void 0;

            badge = Badge.component({
                label: '打赏',
                icon: 'cny'
            });

            if (badge) {
                badges.add('reward', badge);
            }
        });
    }

    _export('default', addRewardBadge);

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumModelsDiscussion) {
            Discussion = _flarumModelsDiscussion.default;
        }, function (_flarumComponentsBadge) {
            Badge = _flarumComponentsBadge.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('lifengzhai/reward/addRewardControls', ['flarum/extend', 'flarum/components/Button', 'flarum/components/DiscussionPage', 'flarum/utils/DiscussionControls', 'lifengzhai/reward/components/RewardModal'], function (_export, _context) {
    "use strict";

    var extend, Button, DiscussionPage, DiscussionControls, RewardModal;
    function addRewardControls() {

        extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
            if (app.session.user) {
                var discussion = this.discussion;

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

    _export('default', addRewardControls);

    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumComponentsDiscussionPage) {
            DiscussionPage = _flarumComponentsDiscussionPage.default;
        }, function (_flarumUtilsDiscussionControls) {
            DiscussionControls = _flarumUtilsDiscussionControls.default;
        }, function (_lifengzhaiRewardComponentsRewardModal) {
            RewardModal = _lifengzhaiRewardComponentsRewardModal.default;
        }],
        execute: function () {}
    };
});;
'use strict';

System.register('lifengzhai/reward/components/RewardModal', ['flarum/components/Modal', 'flarum/components/Button'], function (_export, _context) {
    "use strict";

    var Modal, Button, RewardModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }],
        execute: function () {
            RewardModal = function (_Modal) {
                babelHelpers.inherits(RewardModal, _Modal);

                function RewardModal() {
                    babelHelpers.classCallCheck(this, RewardModal);
                    return babelHelpers.possibleConstructorReturn(this, (RewardModal.__proto__ || Object.getPrototypeOf(RewardModal)).apply(this, arguments));
                }

                babelHelpers.createClass(RewardModal, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(RewardModal.prototype.__proto__ || Object.getPrototypeOf(RewardModal.prototype), 'init', this).call(this);
                        this.rewardNum = 0;
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return 'RewardModal Modal--small';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        // return app.translator.trans('core.forum.change_password.title');
                        return '选择打赏金额';
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        return m(
                            'div',
                            { className: 'Modal-body' },
                            m(
                                'div',
                                { className: 'Form Form--centered' },
                                m(
                                    'div',
                                    { className: 'ButtonGroup' },
                                    Button.component({
                                        className: 'Button',
                                        type: 'button',
                                        children: '1',
                                        onclick: this.setRewardNum.bind(this)
                                    }),
                                    Button.component({
                                        className: 'Button',
                                        type: 'button',
                                        children: '5',
                                        onclick: this.setRewardNum.bind(this)
                                    }),
                                    Button.component({
                                        className: 'Button',
                                        type: 'button',
                                        children: '10',
                                        onclick: this.setRewardNum.bind(this)
                                    })
                                ),
                                m(
                                    'p',
                                    { className: 'helpText ' },
                                    '\u9009\u62E9\u6253\u8D4F\u91D1\u989D\uFF08\u5143\uFF09'
                                ),
                                m(
                                    'div',
                                    { className: 'Form-group' },
                                    Button.component({
                                        className: 'Button Button--primary Button--block',
                                        type: 'submit',
                                        loading: this.loading,
                                        children: '确定打赏'
                                    })
                                )
                            )
                        );
                    }
                }, {
                    key: 'setRewardNum',
                    value: function setRewardNum(e) {
                        this.rewardNum = e.target.innerText;
                        console.log(this.rewardNum);
                    }
                }, {
                    key: 'onsubmit',
                    value: function onsubmit() {
                        console.log('onsubmit', this.rewardNum);
                    }
                }]);
                return RewardModal;
            }(Modal);

            _export('default', RewardModal);
        }
    };
});;
'use strict';

System.register('lifengzhai/reward/main', ['flarum/extend', 'flarum/app', 'flarum/models/Post', 'flarum/models/Discussion', 'flarum/Model', 'flarum/components/NotificationGrid', 'lifengzhai/reward/addRewardBadge', 'lifengzhai/reward/addRewardControls'], function (_export, _context) {
    "use strict";

    var extend, app, Post, Discussion, Model, NotificationGrid, addRewardBadge, addRewardControls;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumModelsPost) {
            Post = _flarumModelsPost.default;
        }, function (_flarumModelsDiscussion) {
            Discussion = _flarumModelsDiscussion.default;
        }, function (_flarumModel) {
            Model = _flarumModel.default;
        }, function (_flarumComponentsNotificationGrid) {
            NotificationGrid = _flarumComponentsNotificationGrid.default;
        }, function (_lifengzhaiRewardAddRewardBadge) {
            addRewardBadge = _lifengzhaiRewardAddRewardBadge.default;
        }, function (_lifengzhaiRewardAddRewardControls) {
            addRewardControls = _lifengzhaiRewardAddRewardControls.default;
        }],
        execute: function () {

            app.initializers.add('lifengzhai-reward', function () {
                // alert('Hello, world!');
                Discussion.prototype.reward = Model.attribute('reward');
                // addRewardBadge();
                addRewardControls();
            });
        }
    };
});