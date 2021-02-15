from typing import List

from qdrant_client import QdrantClient
from qdrant_openapi_client.models.models import Filter
from sentence_transformers import SentenceTransformer


class NeuralSearcher:

    def __init__(self, collection_name: str):
        self.collection_name = collection_name
        self.model = SentenceTransformer('distilbert-base-nli-stsb-mean-tokens', device='cpu')
        self.qdrant_client = QdrantClient()

    def search(self, text: str, filter_: dict = None) -> List[dict]:
        vector = self.model.encode(text).tolist()
        search_result = self.qdrant_client.search(
            collection_name=self.collection_name,
            query_vector=vector,
            query_filter=Filter(**filter_) if filter_ else None,
            top=5
        )
        payloads = [payload for point, payload in search_result]
        return payloads
