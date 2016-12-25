class TodosController < ApplicationController
  before_action :set_list, only: [:create]

  def create
    todo = @list.todos.new(todo_params)
    if todo.save
      render json: todo
    end
  end

  private

  def set_list
    @list = TodoList.find(params[:todo_list_id])
  end

  def todo_params
    params.require(:todo).permit(:description, :complete)
  end
end
