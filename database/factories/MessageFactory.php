<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $taskStatus = [
            'processed',
            'waiting'
        ];

        return [
            'name'   => $this->faker->name,
            'telephone' => $this->faker->e164PhoneNumber,
            'message'=> $this->faker->realTextBetween($minNbChars = 30, $maxNbChars = 255, $indexSize = 2),
            'status'     => $taskStatus[array_rand($taskStatus)]
        ];
    }
}