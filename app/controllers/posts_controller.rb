class PostsController < ApplicationController

  def index
    @styleSheet = "posts"
    @posts = Post.all
  end

  def show
    @styleSheet = "posts"
    if request.location.latitude != 0.0 || request.location.latitude != 0.0
      @timezone = Timezone::Zone.new :latlon => [request.location.latitude, request.location.latitude]
      @timezone = @timezone.active_support_time_zone
    else
      @timezone = 'Eastern Time (US & Canada)'
    end
    @post = Post.find(params[:id])
    @comments = @post.comments
    cookies[:lastPostId] = @post.id
  end

  def create
    @styleSheet = "posts"
    if post_params[:key] == "LOPITS56"
      @post = Post.new(post_params)
      if @post.save
        redirect_to post_url(@post)
      end
    end
  end

  def new
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if post_params[:key] == "LOPITS56"
      if @post.update_attributes(post_params)
      redirect_to post_url(@post)
      end
    elsif  post_params[:key] == nil && current_user != nil
      @comments = @post.comments.build
      @comments.update_attributes(:user_id => current_user.id)
      @comments.update_attributes(:body => post_params[:comments][:body])
      redirect_to post_url(@post)
    end
  end

    private
    def post_params
      params.require(:post).permit(:key, :author, :body, :title, :main_blog_picture, :twitter, :facebook, :googlePlus, :pinterest, :email, comments: [:body])
    end

end