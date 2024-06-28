# backend/app/models.py

class EngagementMetric(Base):
    __tablename__ = 'engagement_metrics'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    chat_session_id = Column(Integer, ForeignKey('chat_sessions.id'), nullable=False)
    response_time = Column(Integer, nullable=False)  # in seconds
    feedback = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship('User', back_populates='engagement_metrics')
    chat_session = relationship('ChatSession')
