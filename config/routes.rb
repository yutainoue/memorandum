Rails.application.routes.draw do
  get 'memo/edit'
  root 'memo#edit'
  resources :memo, only: 'edit'
end