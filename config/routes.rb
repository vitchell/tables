Tables::Application.routes.draw do
  root 'home#index'
  
  get 'iphone' => "home#iphone"

  get 'step01' => "home#step01"
  get 'step02' => "home#step02"
  get 'step03' => "home#step03"
  get 'step04' => "home#step04"
  get 'step05' => "home#step05"

end
