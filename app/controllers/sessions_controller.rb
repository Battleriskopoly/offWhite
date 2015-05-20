class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    if cookies[:lastPostId] != nil
      redirect_to post_path(cookies[:lastPostId])
    else
      redirect_to post_path
    end
  end

  def destroy
    session[:user_id] = nil
    if cookies[:lastPostId] != nil
      redirect_to post_path(cookies[:lastPostId])
    else
      redirect_to post_path
    end
  end
end
