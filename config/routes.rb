Rails.application.routes.draw do
  get 'memo/edit'
  root 'memo#index'
  resources :memo, only: 'edit'
end