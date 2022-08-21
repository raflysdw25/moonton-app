<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlan = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/Index', ['subscriptionPlans' => $subscriptionPlan]);
    }

    public function subscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        // ['user_id', 'subscription_plan_id', 'price', 'expired_date','payment_status', 'snapToken']

        //Pencatatan price dilakukan karena harga pada subscription plan dapat berubah2, jadi price yang diambil tidak berasal dari subscription plan yang dipilih, tetapi dari price yang direcord ketika user melakukan transaksi
        $data = [
            "user_id" => Auth::id(),
            "subscription_plan_id" => $subscriptionPlan->id,
            "price" => $subscriptionPlan->price, 
            "expired_date" => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            "payment_status" => "paid",            
        ];

        $userSubscription = UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
