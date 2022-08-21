<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // json_encode = untuk menyimpan data array
        $subscriptionPlans = [
            [
                "name" => "Basic", 
                "price" => 200000,
                "active_period_in_months" => 3,
                'features' => json_encode([
                    "Unlock 10 basic movies",
                    "Up to 3 users",
                    "Support 24/7 ready",
                ]),
                "is_premium" => false,
            ],
            [
                "name" => "For Greatest", 
                "price" => 800000,
                "active_period_in_months" => 3,
                'features' => json_encode([
                    "Unlock 200 awards movies",
                    "180 subtitles available",
                    "iOS, Android, TV",
                    "Offline Mode",
                    "Up to 20 users",
                    "Support 24/7 ready",
                ]),
                "is_premium" => true,
            ],
        ];

        //Insert data ke database secara bulk (banyak data)
        SubscriptionPlan::insert($subscriptionPlans);
    }
}
