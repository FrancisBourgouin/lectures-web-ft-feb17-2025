class SessionsController < ApplicationController
  # /login
  def new
  end

  # POST new
  def create
    email = params[:email]
    password = params[:password]

    @user = User.find_by_email(email)

    # @user.password == password
    if @user && @user.authenticate(password)
      session[:user_id] = @user.id
      # redirect_to "/users/#{@user.id}"
      redirect_to urls_path
    else
      redirect_to login_path
    end
  end

  # DELETE
  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end

end
