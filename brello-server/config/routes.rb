Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users, :defaults => { :format => 'json' }, :constraints => { :id => /.*/ }
  root :to => 'home#index'
end
