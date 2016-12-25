class TodosController < ApplicationController
  before_action :set_list, only: [:destroy, :create]
  before_action :set_todo, only: [:destroy]

  def create
    todo = @list.todos.new(todo_params)
    if todo.save
      render json: todo
    end
  end

  def destroy
    @todo.destroy
  end

  private

  def set_list
    @list = TodoList.find(params[:todo_list_id])
  end

  def set_todo
    @todo = @list.todos.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:description, :complete)
  end
end
