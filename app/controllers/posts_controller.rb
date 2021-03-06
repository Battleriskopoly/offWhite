class PostsController < ApplicationController

  def index
    @pagenumber = params[:pagenumber].to_i
    if params[:pagenumber] == nil
      @pagenumber = 1
    end
    if Post.all.length % 5 != 0 && @pagenumber == (Post.all.length/5.0).floor + 1 && @pagenumber != 1
      @pagenation = "newer"
      @posts = Post.order("created_at")[0.. (Post.all.length % 5) - 1]
    elsif Post.all.length - (5*@pagenumber) > -1
      @posts = Post.order("created_at")[Post.all.length - 5*@pagenumber..(Post.all.length - 5*@pagenumber) + 5]
      if @pagenumber == 1
        if Post.all.length - (5*@pagenumber) > 0
          @pagenation = "older"
        else
          @pagenation = ""
        end
      else
        @pagenation = "newerolder"
      end
    elsif @pagenumber == 1
      @pagenation = ""
      @posts = Post.order("created_at")
    end

      @timezone = 'Eastern Time (US & Canada)'
  end
  def show
    @styleSheet = "posts"
      @timezone = 'Eastern Time (US & Canada)'
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