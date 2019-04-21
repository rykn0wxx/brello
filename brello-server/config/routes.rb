Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users, :defaults => { :format => 'json' }, :constraints => { :id => /.*/ }

  resources :cards, :defaults => { :format => 'json' } do
    member do
      patch :move
    end
  end
  resources :boards, :defaults => { :format => 'json' } do
    member do
      patch :move
    end
    resources :lists, :defaults => { :format => 'json' } do
      member do
        patch :move
      end
    end
  end
  
  root :to => 'home#index'
end
