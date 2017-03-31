<?php

namespace Lifengzhai\Reward\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Lifengzhai\Reward\Api\Serializer\RewardSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Lifengzhai\Reward\Command\CreateReward;
use Tobscure\JsonApi\Document;
use Illuminate\Contracts\Bus\Dispatcher;

class CreateRewardController extends AbstractCreateController
{
    public $serializer = RewardSerializer::class;

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(
            new CreateReward($request->getAttribute('actor'), array_get($request->getParsedBody(), 'data'))
        );
    }
}
