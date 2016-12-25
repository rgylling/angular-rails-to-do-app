class TodoListsController < ApplicationController

  before_action :set_list, only: [ :show, :update, :destroy]

  def index
    render json: TodoList.all
  end

  def show
    render json: @list
  end

  def update
    if @list.update(list_params)
    end

  end

  def destroy
    @list.destroy
  end


  private

  def list_params
    params.require(:todo).permit(:name)
  end

  def set_list
    @list = TodoList.find_by_id(params[:id])
  end
end
