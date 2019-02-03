class MemoController < ApplicationController
  def index
    @memos = Memo.all
  end

  def new
    @memo = Memo.create(title: 'タイトル', text: '本文')
    redirect_to edit_memo_path(@memo.id)
  end

  def edit(id)
    @memo = Memo.find(id)
  end

  def update(id, memo)
    @memo = Memo.find(id)
    @memo.update(memo.permit(:title, :text))
    redirect_to edit_memo_path
  end

  def destroy(id)
    @memo = Memo.find(id)
    @memo.delete
    redirect_to memo_index_path
  end
end
