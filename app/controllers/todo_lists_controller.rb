class TodoListsController < ApplicationController

  before_action :set_list, only: [ :show]

  def index
    render json: TodoList.all
  end

  def show
    render json: @list
  end


  private

  def set_list
    @list = TodoList.find_by_id(params[:id])
  end
end
