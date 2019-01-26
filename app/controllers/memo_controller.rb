class MemoController < ApplicationController
  def edit(id)
    @memo = Memo.find(id)
  end

  def update(id, memo)
    @memo = Memo.find(id)
    @memo.update(memo.permit(:title, :text))
    redirect_to edit_memo_path
  end
end
