Rails.application.routes.draw do
  namespace :api do
    resources :blogs do
      resources :blog_posts
    
    end
  end
end
