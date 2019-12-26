class Api::BlogPostsController < ApplicationController
  before_action :set_parent
  def create
    @blog.blog_posts = Blog_post.new(blog_post_params)
    if @blog.blog_posts.save
      render json: @blog.blog_posts
    else 
      render json: { errors: @blog.blog_posts.errors }, status: :unprocessable_entity
    end
  end
  def update
    @blog.blog_posts = Blog_post.all.find(params[:id])
    if @blog.blog_posts.update(blog_post_params)
      render json: @blog.blog_posts
    else 
      render json: { errors: @blog.blog_posts.errors }, status: :unprocessable_entity
    end
  end
  def destroy
    Blog_post.all.find(params[:id]).destroy
    render json: { message: 'Item deleted'}
  end
  private
    def set_blog
        @blog = Blog.find(params[:blog_id])
      end
    def blog_post_params
      params.require(:blog_post).permit(
        :title, :body, :date)
    end
end
end

end


# Model_name.all
# Anything with the capital letter Model_name will change to:

# @parent.children(s)
# The parents instance variable and calling its child plural.


# * The index method in a child controller does not have the .all at the end.


# To define what at parent is, you would need to do a before action and define the method in the private section.

# before_action :set_parent
# .
# .
# .

# private
#   def set_parent
#     @parent = Model_name_of_parent.find(params[:parent_id])
#   end