Rails.application.routes.draw do
  root 'memo#edit'
  resources :memo
end