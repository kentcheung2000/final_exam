Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  namespace :api, defaults: { format: :json } do
    # /api..
    namespace :v1 do
      # /api/v1...
      resources :auctions do
        resources :bids, only: [:create, :destroy]
      end
      # /api/v1/questions
      resource :session, only: [:create, :destroy]

     

      # /api/v1/user
      resources :users, only: [:create] do
        # api/v1/user/current
        get :current, on: :collection
        # default
        # api/v1/user/:id/current
      end
    end
  end


  resources :auctions do
    resources :bids, only: [:create, :destroy]
  end

  resources :users, only:[:new, :create]

  resources :sessions, only: [:new, :create] do 
    delete :destroy, on: :collection
  end

end
