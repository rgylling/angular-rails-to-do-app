class TodosController < ApplicationController
  before_action :set_list, only: [:destroy, :create, :update]
  before_action :set_todo, only: [:destroy, :update]

  def create
    todo = @list.todos.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: { errors: "Error creating Todo." }
    end
  end

  def update
    if @todo.update(todo_params)
      render nothing: true
    else
      render json: { errors: "Error updating Todo."}
    end
  end

  def destroy
    if @todo.destroy
      render nothing: true
    else
      render json: { errors: "Error deleting Todo." }
    end
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
