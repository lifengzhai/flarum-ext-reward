import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

/**
 * `RewardModal` 组件 让用户选择打赏金额
 */
export default class RewardModal extends Modal {
    init(){
        super.init();
        this.rewardNum = 0;
    }
    className() {
        return 'RewardModal Modal--small';
    }
    title() {
        // return app.translator.trans('core.forum.change_password.title');
        return '赞赏';
    }
    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="RewardNumButtonGroup">
                        {Button.component({
                            className: 'Button RewardNumButton',
                            type: 'button',
                            children: '1',
                            onclick: this.setRewardNum.bind(this)
                        })}
                        {Button.component({
                            className: 'Button RewardNumButton',
                            type: 'button',
                            children: '5',
                            onclick: this.setRewardNum.bind(this)
                        })}
                        {Button.component({
                            className: 'Button',
                            type: 'button',
                            children: '10',
                            onclick: this.setRewardNum.bind(this)
                        })}
                    </div>
                    <p className="helpText ">其他金额</p>
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading,
                            children: '确定打赏'
                        })}
                    </div>
                </div>
            </div>
        );
    }
    setRewardNum(e) {
			  console.log(this);
        this.rewardNum = e.target.innerText;
        console.log(this.rewardNum);
    }
    onsubmit(){
        console.log('onsubmit', this.rewardNum);
    }
}
