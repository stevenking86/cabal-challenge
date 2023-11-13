require 'csv'

class TaskImporter
  def self.import(csv)
    tasks = []
    CSV.foreach(csv, headers: true) do |row|
      tasks << row.to_h
      # save an array of any failures' row numbers and return them
    end

    Task.import(tasks)
  end
end