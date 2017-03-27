<?php

/**
 * 添加 打赏 API
 *
 */

namespace Lifengzhai\Reward\Listener;

use Flarum\Event\ConfigureApiRoutes;
use Lifengzhai\Reward\Api\Controller;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagsApi
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'configureApiRoutes']);
    }

    public function configureApiRoutes(ConfigureApiRoutes $event)
    {
//        $event->get('/tags', 'tags.index', Controller\ListTagsController::class);
        $event->post('/rewards', 'rewards.create', Controller\CreateRewardController::class);
//        $event->patch('/tags/{id}', 'tags.update', Controller\UpdateTagController::class);
//        $event->delete('/tags/{id}', 'tags.delete', Controller\DeleteTagController::class);
    }
}
