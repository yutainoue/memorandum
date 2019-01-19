Rails.application.routes.draw do
  root 'memo#index'
  resources :memo, only: edit
end