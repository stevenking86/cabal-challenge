class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.integer :status
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
