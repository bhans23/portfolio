class CreateBlogPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_posts do |t|
      t.string :post_title
      t.text :body
      t.date :post_date
      t.belongs_to :blog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
