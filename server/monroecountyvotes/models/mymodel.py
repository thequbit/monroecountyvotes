from sqlalchemy import (
    Column,
    Index,
    Integer,
    UnicodeText,
)

from .meta import Base

class CreationMixin():

	id = Column(UUIDType(binary=False), primary_key=True, unique=True)
	creation_datetime = Column(DateTime, server_default=func.now())

    @classmethod
    def add(cls, **kwargs):
        thing = cls(**kwargs)
        if thing.id is None:
            thing.id = str(uuid4())
        DBSession.add(thing)
        DBSession.commit()
        return thing

    @classmethod
    def get_all(cls):
        things = DBSession.query(
            cls,
        ).all()
        return things

    @classmethod
    def get_paged(cls, start=0, count=25):
        things = DBSession.query(
            cls,
        ).slice(start, start+count).all()
        return things

    @classmethod
    def get_by_id(cls, id):
        thing = DBSession.query(
            cls,
        ).filter(
            cls.id == id,
        ).first()
        return thing

    @classmethod
    def delete_by_id(cls, id):
        thing = cls.get_by_id(id)
        if thing is not None:
            DBSession.delete(thing)
            DBSession.commit()
        return thing

    @classmethod
    def update_by_id(cls, id, **kwargs):
        keys = set(cls.__dict__)
        thing = DBSession.query(cls).filter(cls.id==id).first()
        if thing is not None:
            for k in kwargs:
                if k in keys:
                    setattr(thing, k, kwargs[k])
            thing.modified_datetime = datetime.datetime.utcnow()
            DBSession.add(thing)
            DBSession.commit()
        return thing

    def to_dict(self):
        return {
            'id': str(self.id),
            'creation_datetime': str(self.creation_datetime),
        }


class Ballots(Base, CreationMixin):

    __tablename__ = 'ballots'
    
    url = Column(UnicodeText, nullable=False)
    sheet = Column(UnicodeText, nullable=False)


class Offices(Base, CreationMixin):

	__tablename__ = 'offices'

	name = Column(UnicodeText, nullable=False)
	classification = Column(UnicodeText, nullable=False)
	description = Column(UnicodeText, nullable=False)


class Candidates(Base, CreationMixin):

	__tablename__ = 'candidates'

	name = Column(UnicodeText, nullable=False)
	office_id = Column(UnicodeText, nullable=False)


class Parties(Base, CreationMixin):

	__tablename__ = 'parties'

	name = Column(UnicodeText, nullable=False)
	classification = Column(UnicodeText, nullable=False)
	description = Column(UnicodeText, nullable=False)

