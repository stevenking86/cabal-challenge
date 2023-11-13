class TasksController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @tasks = @user.tasks
  end

  def create
  end

  def update
  end

  def import
    puts "PARAMS: "
    puts params
    # accept the file from params
    # call our importer
    # return success or errors
  end
end
