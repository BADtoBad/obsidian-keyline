# Complexity belongs somewhere

Reading prompt: *A Philosophy of Software Design*, John Ousterhout.

## Working note

Removing a control does not remove the responsibility behind it. If the system makes a decision automatically, it still needs a clear rule, predictable boundaries, and a recovery path.

## Apply it

Workspace switching should protect the current state before changing the layout. A simpler button is only genuinely simpler when the underlying behaviour is dependable.

## Open question

Which decisions should remain visible because the user has context the system cannot infer?

Original reflection. See [[Decision log]] and [[Field Notes]].
