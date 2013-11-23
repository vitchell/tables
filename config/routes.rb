Tables::Application.routes.draw do
  root 'home#index'
  get 'iphone' => "home#iphone"
end
