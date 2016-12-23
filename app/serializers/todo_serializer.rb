class TodoSerializer < ActiveModel::Serializer
  attributes :id, :description, :todo_list_id, :complete
end
