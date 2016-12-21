class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :description
      t.boolean :complete
      t.references :list, foreign_key: true
    end
  end
end
