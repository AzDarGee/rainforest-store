class UsersController < ApplicationController
  def new
    @user = User.new
  end
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to products_url, :notice => "Signed Up!"
    else
      render :new
      flash.now[:alert] = 'Couldn\'t sign up, try again and submit!'
    end
  end
  private
  def user_params
    params.require(:user).permit(:name,:email, :password,:password_digest)
  end
end
