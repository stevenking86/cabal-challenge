class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
  end

  def update
  end
end
