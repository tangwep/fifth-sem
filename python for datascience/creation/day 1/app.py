import tkinter as tk
from tkinter import messagebox

# ---------- Game State ----------
current_player = "X"
board = [""] * 9
buttons = []

# ---------- Game Logic ----------
def check_winner():
    win_patterns = [
        (0,1,2), (3,4,5), (6,7,8),  # rows
        (0,3,6), (1,4,7), (2,5,8),  # columns
        (0,4,8), (2,4,6)            # diagonals
    ]

    for a, b, c in win_patterns:
        if board[a] == board[b] == board[c] != "":
            return board[a]

    if "" not in board:
        return "Draw"

    return None

def on_click(index):
    global current_player

    if board[index] != "":
        return

    board[index] = current_player
    buttons[index].config(text=current_player, state="disabled")

    result = check_winner()
    if result:
        if result == "Draw":
            messagebox.showinfo("Game Over", "Draw!")
        else:
            messagebox.showinfo("Game Over", f"{result} wins!")
        reset_game()
        return

    current_player = "O" if current_player == "X" else "X"

def reset_game():
    global board, current_player
    board = [""] * 9
    current_player = "X"
    for btn in buttons:
        btn.config(text="", state="normal")

# ---------- GUI ----------
root = tk.Tk()
root.title("Tic Tac Toe")
root.resizable(False, False)

for i in range(9):
    btn = tk.Button(
        root,
        text="",
        font=("Arial", 32),
        width=4,
        height=2,
        command=lambda i=i: on_click(i)
    )
    btn.grid(row=i//3, column=i%3)
    buttons.append(btn)

root.mainloop()
