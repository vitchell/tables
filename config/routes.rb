Tables::Application.routes.draw do
  root 'home#index'
  
  get 'test' => "home#test"

  get 'step01' => "home#step01"
  get 'step02' => "home#step02"
  get 'step03' => "home#step03"
  get 'step031' => "home#step031"
  get 'step04' => "home#step04"
  get 'step05' => "home#step05"
  get 'step06' => "home#step06"
  get 'step07' => "home#step07"
  get 'step08' => "home#step08"

  get 'slide1' => "presentation#slide1"
  get 'slide2' => "presentation#slide2"
  get 'slide3' => "presentation#slide3"
  get 'slide4' => "presentation#slide4"
  get 'slide5' => "presentation#slide5"
  get 'slide6' => "presentation#slide6"
  get 'slide7' => "presentation#slide7"
  get 'slide8' => "presentation#slide8"
  get 'slide9' => "presentation#slide9"
  get 'slide10' => "presentation#slide10"

end
