# backend/app/models.py

class ChatSession(Base):
    __tablename__ = 'chat_sessions'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    started_at = Column(DateTime, default=datetime.datetime.utcnow)
    ended_at = Column(DateTime, nullable=True)
    topic = Column(String, nullable=False)

    user = relationship('User', back_populates='chat_sessions')
    messages = relationship('Message', back_populates='chat_session')
