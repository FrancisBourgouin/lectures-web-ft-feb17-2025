class CreateUrls < ActiveRecord::Migration[8.0]
  def change
    create_table :urls do |t|
      t.string :short_url
      t.string :long_url
      t.string :description

      t.timestamps
    end
  end
end
