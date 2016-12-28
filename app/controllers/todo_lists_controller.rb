class TodoListsController < ApplicationController

  before_action :set_list, only: [ :show, :update, :destroy]

  def index
    render json: TodoList.all
  end

  def show
    if @list
      render json: @list
    else
      render json: { errors: "This is not a list, please try again."}
    end
  end

  def update
    if @list.update(list_params)
      render nothing: true
    else
      render json: { errors: "Error updating, please try again."}
    end
  end

  def create
    list = TodoList.new(list_params)
    if list.save
      render json: list
    else
      render json: { errors: "Error creating, please try again."}
    end
  end

  def destroy
    if @list.destroy
      render nothing: true
    else
      render json: { errors: "Error deleting, please try again"}
    end
  end


  private

  def list_params
    params.require(:todo_list).permit(:name)
  end

  def set_list
    @list = TodoList.find(params[:id])
  end
end
